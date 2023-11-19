import { useState } from 'react';
import css from 'components/Styles.module.css'
import { Notify } from "notiflix";

export const Searchbar = ({onSubmit }) => {
    const [query, setQuery] = useState('');
 
    const handleChange = event => setQuery(event.target.value.toLowerCase());

    const handleSubmit = event => {
        event.preventDefault();
        if (!query) {
            Notify.info('Please enter your request.');
            return
        }
        onSubmit(query);
        setQuery('')
    };
    

    return (
        <header >
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    
    <input
      
      type="text"
      autoComplete="off"
      autoFocus
            // placeholder="Search movies"
            value={query}
            onChange={handleChange}

          />
          <button type="submit" className={css.SearchFormButton}>
      <span>Search</span>
    </button>
  </form>
</header>
    )

}
