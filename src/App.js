import { useState } from 'react';
import './App.css';
import { categories, films } from './data';
import SomeList from './SomeList';


function App() {
  const [categoryId, setCategoryId] = useState()

  const onClickCategory = (categoryId) => {
    setCategoryId(categoryId)
  }

  return (
    <div className="App">

      {categories.map(category =>
         <button onClick={()=> onClickCategory(category.id)}>{category.name}</button>
        )
      }

      <SomeList categoryId={categoryId} />
      
    </div>
  );
}

export default App;
