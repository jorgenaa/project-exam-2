import SearchBar from './searchbar/SearchBar';

const Banner = () => {
    return (
        <section className="banner w-100vw">
            <div className="banner__background">
                <div className="banner__search-container">
                    <h3 className="banner__heading h3">Find good deals on hotels, B&amp;Bs and guesthouses in Bergen </h3>
                    <SearchBar />
                </div>
            </div>
          
        </section>
    )
}

export default Banner;
