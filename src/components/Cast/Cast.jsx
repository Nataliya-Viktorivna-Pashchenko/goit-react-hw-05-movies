import css from 'components/Styles.module.css'
export const Casts = (casts) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const items = casts.casts.map(
        ({ original_name, id, profile_path, character }) => (
            <li key={id}>
                <img className = {css.CastPhoto} src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : defaultImg} alt="poster" />
                <p>{original_name}</p>
                <p>Character:{character}</p>
            </li>));
     return <ul >{items}</ul>;
     }
 



