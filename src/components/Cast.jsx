import css from 'components/Styles.module.css'
export const Casts = (casts) => {
    const items = casts.casts.map(
        ({ original_name, id, profile_path, character }) => (
            <li key={id}>
                <img className = {css.CastPhoto} src={`https://image.tmdb.org/t/p/w300/${profile_path} `} alt="poster" />
                <p>{original_name}</p>
                <p>Character:{character}</p>
            </li>));
     return <ul >{items}</ul>;
     }
 



