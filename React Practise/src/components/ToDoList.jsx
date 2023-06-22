import React, { useEffect, useState } from 'react';
import "./CSS/toDoList.css"


// TO GET DATA FROM LOCAL STORAGE ON REFRESH

const getLocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
        return JSON.parse(localStorage.getItem('lists'))   // list mathi mlta data ne string mathi array ma convert krva
    }

    else {
        return [];
    }
}


function ToDOList(props) {

    const [data, setData] = useState('');                  // input ni andr na data manage krva 

    const [item, setItem] = useState(getLocalItems());    // task ni list no data manage krva

    const [toggleSubmit, setToggleSubmit] = useState(true);  // input ni baju na add btn ne  toggle krva

    const [isEditItem, setIsEditItem] = useState(null);     // kya data ne aapde select krie 6iye edit krva ena mate


    // TO ADD ITEM 

    function addItem() {

        if (data == "") { alert("add data") }

        else if (data && !toggleSubmit) {
            setItem(
                item.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: data }
                    }
                    return elem;
                })
            )

            setToggleSubmit(true);

            setData('');
    
            setIsEditItem(null);

        }

        else {
            const allInputData = { id: new Date().getTime().toString(), name: data }              //Data ni sathe sathe id b joie 6 etle aa rite object ma key value pair ma lidhu
            setItem([...item, allInputData])
            setData('')
        }
    }


    //  TO DELETE ITEM 

    function removeItem(index) {
        const spareData = item.filter((elem) => {
            return (index !== elem.id);
        })

        setItem(spareData);
    }


    // TO DELETE ALL ITEMS

    const allDelete = () => {
        if (item == "") {
            alert("Add data first")
        }

        else {
            setItem([])
        };
    }

    // TO ADD DATA IN LOCAL STORAGE

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(item))    //key value pair ma data store thay etle items ne string ma convert krva
    }, [item])



    // TO EDIT ITEM

    const editItem = (id) => {
        const newEditItem = item.find((elem) => {
            return elem.id === id
        })

        setToggleSubmit(false);

        setData(newEditItem.name);

        setIsEditItem(id);
    }


    console.log(data)
    return (
        <>
            <div className="container-fluid cover">
                <div className="row">
                    <div className="col-12">
                        <h1 className=''>my ToDo List App</h1>

                        <input type='text' placeholder='Add tasks...' className=' mt-3 mb-5' value={data} onChange={(e) => { setData(e.target.value) }} />


                        {
                            toggleSubmit ? <button className='btn add ml-4 bg-success text-light rounded border-success p-2'
                                onClick={addItem}>Add Task</button> :
                                <button className='btn update ml-4 bg-primary text-light rounded border-primary p-2' onClick={addItem}>Update Task</button>
                        }



                        {
                            item.map((element, index) => {
                                return (

                                    <div className="listitems mt-4" key={element.id} >
                                        <h5 className='hello'><span className='rank'>({index + 1})</span>{element.name}<button className='bg-info text-light border-info p-2 edtbtn' onClick={() => editItem(element.id)}>Edit</button><button onClick={() => removeItem(element.id)} className='dltbtn  bg-danger text-light  border-danger p-2'>Delete
                                        </button></h5>
                                    </div>
                                )

                            })
                        }

                        <br /><br />
                        <button className='bg-danger p-2 text-light border-danger mt-5' onClick={allDelete}>Delete all</button>
                    </div>
                </div>
            </div>
        </>

    );

}

export default ToDOList;