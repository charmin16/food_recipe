import React, { useEffect, useState } from 'react'

const FoodRecipe = () => {

    const [foodClass, setFoodClass] = useState(null)
    const [singleDet, setSingleDet] = useState(null)
    const [favData, setFavData] = useState(null)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [inputValue, setInputValue] = useState('')

    const [likes, setLikes] = useState([])

    // const likesHandler = () => {
    //     setLikes([...likes, ])
    // }

    console.log(likes)

    const recipes = [
        { name: 'carrot' }, { name: 'broccoli' }, { name: 'asparagus' }, { name: 'cauliflower' },
        { name: 'corn' }, { name: 'cucumber' }, { name: 'green pepper' }, { name: 'lettuce' },
        { name: 'mushrooms' }, { name: 'onion' }, { name: 'potato' }, { name: 'pumpkin' },
        { name: 'tomato' }, { name: 'beetroot' }, { name: 'peas' }, { name: 'zucchini' }, { name: 'radish' },
        { name: 'sweet potato' }, { name: 'artichoke' }, { name: 'sweet leek' }, { name: 'cabbage' },
        { name: 'celerey' }, { name: 'chili' }, { name: 'garlic' }, { name: 'basil' }, { name: 'sweet potato' },
        { name: 'cinnamon' }, { name: 'sweet potato' }, { name: 'bean' }, { name: 'apple' }, { name: 'banana' }, { name: 'apricot' },
        { name: 'pizza' }, { name: 'popcorn' }, { name: 'tacos' }, { name: 'hamburger' }, { name: 'fries' }, { name: 'chips' }, { name: 'masala' },
        { name: 'chicken' }, { name: 'chocolates' }, { name: 'ice cream' }, { name: 'donuts' }, { name: 'sushi' }, { name: 'goat' }, { name: 'lamb' },
        { name: 'turkey' }, { name: 'pork' }, { name: 'fish' }, { name: 'crab' }, { name: 'fish' }, { name: 'bacon' }, { name: 'ham' }, { name: 'pepperoni' },
        { name: 'ribs' }, { name: 'salami' }
    ]

    // const fetchRecipe = async () => {
    //     setError(null)
    //     setLoading(true)
    //     try {
    //         const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${inputValue}`)
    //         const data = await res.json()
    //         console.log(res)
    //         if (!res.ok) {
    //             throw new Error(res.statusText)
    //         }
    //         console.log(foodClass)
    //         setFoodClass(data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error.message)
    //         setError(error)
    //     }
    // }

    const fetchRecipe = async (recipe) => {
        setError(null)
        setLoading(true)
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
            const data = await res.json()
            console.log(res)
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            // console.log(foodClass)
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
        <div className='translate-y-0'>
            <div id="search_container" className="mx-auto w-[95%]
            py-4">
                <form onSubmit={submitHandler} className="bg-red-00 text-white md:w-[65%] w-[100%] mx-auto flex md:justify-between flex-col md:flex-row items-center space-y-4 md:space-y-0">
                    <div className='pl-4'>
                        <img src='cut.png' className='w-[3em] h-[3em] inline rounded-full' />
                        <span className='italic pl-4 text-xl text-white'>foodflix</span>
                    </div>
                      {/* <input
                          onChange={(e) => setInputValue(e.target.value)}
                          value={inputValue}
                          type="text"
                          placeholder='search over 10,000 recipes eg pizza, bean, chicken, etc'
                          className='bg-white w-[90%] md:w-[50%] rounded-full pl-6 py-2 placeholder:text-sm' /> */}
                        <select
                            className='text-xl w-[55%] rounded-md text-white p-2 bg-gray-600'
                            onChange={(e) => fetchRecipe(e.target.value)}
                            value={recipes.name}>
                    
                            {recipes.map((recipe, index) => (
                            <option key={index} value={recipe.name}>
                            {recipe.name}
                            </option>
                    ))}
                    </select>
                  </form>
              </div>
              <div id="result" className="text-white flex flex-col md:flex-row justify-betwee mx-auto w-[95%]" >
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
                
                  {likes.length > 0 ? <div id="middle" className='md:w-[50%] w-[100%] bg-gray-900 text-center'>
                      {singleDet && <img src={singleDet.recipe.image_url} className='w-[100%] h-[12%] ' />}
                      {singleDet && (
                          <div className='flex justify-between items-center px-6 py-3 bg-gray-700 mb-6'>
                              <div>
                                  <i className="fa-regular fa-clock text-red-500"> </i>
                                  <span className='pl-4 text-lg font-bold'>45 MINUTES</span>
                              </div>
                              {/* {likes.length > 0 && window.scrollTo({ bottom: 0, left: 0, behavior: 'smooth' })} */}
                              <div>
                                  {/* {likes.length > 0 && window.scrollTo( 0, document.body.scrollHeight )} */}
                                <span className='pr-2'>Add to favourites</span>
                                <i onClick={() => setLikes([...likes, singleDet.recipe.title])} className="fa-regular fa-heart  text-white bg-red-500 p-2 rounded-full cursor-pointer"></i>
                              </div>
                              
                          </div>)}
                      {singleDet && (
                          <h1 className="text-3xl font-bold py-4 md:max-w-[80%] mx-auto">{singleDet.recipe.title}</h1>
                      )}
                         
                      {singleDet && singleDet.recipe.ingredients.map((ingr, index) => (
                          <ul key={index} className='w-[75%] mx-auto shadow-2xl '>
                              <li className='py-4 list-none'>{ingr}</li>
                          </ul>
                      ))}
                      {singleDet && (<div className='max-w-[80%] md:max-w-[60%] shadow-2xl mx-auto mt-8 text-center space-y-4 pb-12'>
                          <h1 className="text-3xl text-orange-800 py-4">HOW TO COOK IT</h1>
                          <h1 className="text-xl mx-auto max-w-[95%] leading-10 pb-4">
                              This recipe was carefully designed and tested by <span className='font-bold'>
                                  Two Peas and Their Pod.</span> Pls check out directions at
                              their website
                          </h1>
                          <button className="px-6 py-2 rounded-full text-white bg-orange-500">
                              <a href={singleDet.recipe.publisher_url} target="_blank" rel='noopener'>Directions</a>
                          </button>
                      </div>)}
                  </div> :
                      <div id="middle" className='md:w-[60%] border w-[100%] bg-gray-900 text-center'>
                          {singleDet && <img src={singleDet.recipe.image_url} className='w-[100%] h-[12%] ' />}
                          {singleDet && (
                              <div className='flex justify-between items-center px-6 py-3 bg-gray-700 mb-6'>
                                  <div>
                                      <i className="fa-regular fa-clock text-red-500"> </i>
                                      <span className='pl-4 text-lg font-bold'>45 MINUTES</span>
                                  </div>
                                  <i onClick={() => setLikes([...likes, singleDet.recipe.title])} className="fa-regular fa-heart  text-white bg-red-500 p-2 rounded-full cursor-pointer"></i>
                              </div>)}
                          {singleDet && (
                              <h1 className="pl-20 pr-8 text-3xl font-bold py-4">{singleDet.recipe.title}</h1>
                          )}
                         
                          {singleDet && singleDet.recipe.ingredients.map((ingr, index) => (
                              <ul key={index} className='w-[75%] mx-auto shadow-2xl '>
                                  <li className='py-4 list-none'>{ingr}</li>
                              </ul>
                          ))}
                          {singleDet && (<div className='max-w-[80%] md:max-w-[60%] shadow-2xl mx-auto mt-8 text-center space-y-4 pb-12'>
                              <h1 className="text-3xl text-orange-800 py-4">HOW TO COOK IT</h1>
                              <h1 className="text-xl mx-auto max-w-[95%] leading-10 pb-4">
                                  This recipe was carefully designed and tested by <span className='font-bold'>
                                      Two Peas and Their Pod.</span> Pls check out directions at
                                  their website
                              </h1>
                              <button className="px-6 py-2 rounded-full text-white bg-orange-500">
                                  <a href={singleDet.recipe.publisher_url} target="_blank" rel='noopener'>Directions</a>
                              </button>
                          </div>)}
                      </div>}
                  
                  
                  {likes.length > 0 && <div id="right" className='lg:w-[25%] md:w-[25%] bg-gray-800 text-center text-white px-8 space-y-6 pb-8 lg:pb-0 '>
                      <h1 className="text-2xl text-white font-bold pt-4 py-2">My Favourite List</h1>
                      {likes.map((item, index) => (
                          <ul key={index}>
                              <li>{item}</li>
                          </ul>
                      ))}
                    
                  </div>}
              </div>
          </div>
        
    </div>
  )
}

export default FoodRecipe