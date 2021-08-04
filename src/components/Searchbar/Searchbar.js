    import {useState} from 'react';
    export default function Searchbar({onChangeQuery}){
        const [query, setQuery] = useState('');
        const handleChange = element => {
                setQuery(element.currentTarget.value)
            };
        const handleSubmit=element=>{
            element.preventDefault();
                if (query.length !== 0) {
                    onChangeQuery(query)     
                } 
            }
          return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
                    <button type="submit" onSubmit={handleSubmit} className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={handleChange}
                    />
                 </form>
            </header>
            );
    }





    // old code
    // class Searchbar extends Component{ 
    // state = { query: '' };

    // handleChange = element => {
    //     this.setState({ query: element.currentTarget.value, })
    // };
    // handleSubmit=element=>{
    // element.preventDefault();
    //     if (this.state.query.length !== 0) {
    //         this.props.onChangeQuery(this.state.query)     
    //     } 
    // }
//     render(){
//         return (
//     <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//             <button type="submit" onSubmit={this.handleSubmit} className="SearchForm-button">
//                 <span className="SearchForm-button-label">Search</span>
//             </button>
//             <input
//                 className="SearchForm-input"
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//                 value={this.state.query}
//                 onChange={this.handleChange}
//             />
//          </form>
//     </header>
//     );
//   }
// }
// export default Searchbar;