import Film from "./Film";

const FilmList = ({ films }) => {
    
    const filmNodes = films.map(film => {
        return (
            <Film key={film.key} name={film.name} url={film.url}/>
        );
    });

    return (
        <p>{filmNodes}</p>
    );
};

export default FilmList;