import React, { useEffect, useState } from 'react'

const FoodRecipe = () => {

    const [foodClass, setFoodClass] = useState(null)
    const [singleDet, setSingleDet] = useState(null)
    const [favData, setFavData] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const[inputValue, setInputValue] = useState('')

    const fetchRecipe = async () => {
        setError(null)
        setLoading(true)
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputValue}`)
            const data = await res.json()
            console.log(res)
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            console.log(foodClass)
            setFoodClass(data)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    const recipe = async(rid) => {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${rid}`)
        const data = await response.json()
        setSingleDet(data)
        console.log(singleDet)
        // window.scrollTo(40, 0)
         window.scrollTo({top: 1000, left: 0, behavior: 'smooth'});
    }

    const favorite = async() => {
        // setFavData(prevFavData => [...prevFavData, 'abc'])
    }

  return (
      <div id='body-container' className='bg-gray-900 w-screen'>
          {error ? <h1 className="flex items-center justify-center translate-y-36 text-5xl text-black">check spelling</h1> : <div className='translate-y-0'>
              <div id="search_container" className="mx-auto w-[95%]
            py-4">
                  <form onSubmit={submitHandler} className="bg-red-00 text-black md:w-[65%] w-[100%] mx-auto flex md:justify-between flex-col md:flex-row items-center space-y-4 md:space-y-0">
                      <div className='pl-4'>
                          <img src='cut.png' className='w-[3em] h-[3em] inline rounded-full' />
                          <span className='italic pl-4 text-xl text-white'>forkify</span>
                      </div>
                      <input
                          onChange={(e) => setInputValue(e.target.value)}
                          value={inputValue}
                          type="text"
                          placeholder='search over 10,000 recipes eg pizza, bean, chicken, etc'
                          className='bg-white w-[90%] md:w-[50%] rounded-full pl-6 py-2 placeholder:text-sm' />
                  </form>
              </div>
              <div id="result" className="flex flex-col md:flex-row justify-between mx-auto w-[95%]" >
                  <div id="left" className='md:w-[25%] w-[100%] bg-black '>
                      {foodClass && foodClass.recipes.slice(0,8).map((food, index) => (
                          <div key={index} onClick={() => recipe(food.recipe_id)}
                              className='flex py-4 space-x-6 max-w-[85%] mx-auto hover:cursor-pointer hover:shadow-2xl hover:bg-slate-300 sm:scroll-my-10 md:scroll-my-0 md:scroll-smooth'>
                              <img src={food.image_url} className='w-[4em] h-[4em] rounded-full' />
                              <div className='space-y-2'>
                                  <h1 className="text-red-400 ">{food.title.substring(0, 20)}...</h1>
                                  <h1>{food.publisher}</h1>
                              </div>
                          </div>
                      ))}
                  </div>
                
                  <div id="middle" className='md:w-[75%] w-[100%] bg-gray-500'>
                      {singleDet && <img src={singleDet.recipe.image_url} className='w-[100%] h-[12%] ' />}
                      {singleDet && (
                          <div className='flex justify-between items-center px-6 py-3 bg-gray-400 mb-6'>
                              <div>
                                  <i className="fa-regular fa-clock text-red-500"> </i>
                                  <span className='pl-4'>45 MINUTES</span>
                              </div>
                              <i className="fa-regular fa-heart fa-2x text-white bg-red-500 p-2 rounded-full cursor-pointer"></i>
                          </div>)}
                      {singleDet && (
                          <h1 className="pl-20 pr-8 text-3xl font-bold py-4">{singleDet.recipe.title}</h1>
                      )}
                         
                      {singleDet && singleDet.recipe.ingredients.map((ingr, index) => (
                          <ul key={index} className='w-[75%] mx-auto '>
                              <li className='py-4 list-disc'>{ingr}</li>
                          </ul>
                      ))}
                      {singleDet && (<div className='bg-gray-400 mt-8 text-center space-y-4 pb-12'>
                          <h1 className="text-3xl text-orange-800 py-4">HOW TO COOK IT</h1>
                          <h1 className="text-xl mx-auto max-w-[95%] leading-10">
                              This recipe was carefully designed and tested by <span className='font-bold'>
                                  Two Peas and Their Pod.</span> Pls check out directions at
                              their website
                          </h1>
                          <button className="px-6 py-2 rounded-full text-white bg-orange-500">
                              <a href={singleDet.recipe.publisher_url} target="_blank" rel='noopener'>Directions</a>
                          </button>
                      </div>)}
                  </div>
                  {/* <div id="right" className='w-[25%] white'> */}
                      {/* <h1 className="text-red-500">My Favourite List</h1> */}
                      {/* {favData && favData.map((item, index) => (
                          <div key={index}>
                              <h1>{item}</h1>
                          </div>
                      ))} */}
                    
                  {/* </div> */}
              </div>
          </div>}
        
    </div>
  )
}

export default FoodRecipe