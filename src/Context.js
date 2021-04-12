import React, { Component, createContext } from 'react'

const ProductContext = createContext()

class ProductProvider extends Component {
    state = {
        data: [],
        searchText: '',
        src: '',
        title: '',
        showVideo: false
    }

    onSearch = (text) => {
        const url = new URL('https://itunes.apple.com/search');
        const params = { term: text, media: 'musicVideo' };
        url.search = new URLSearchParams(params);
        fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                this.setState({ data: data });
            })
    }

    handleInput = (e) => {
        const text = e.target.value
        this.setState({ searchText: text })
    }
    handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            this.onSearch(this.state.searchText)
        }
    }
    openMedia = (url, title) => {
        this.setState({
            src: url
        })
        this.setState({
            title: title
        })
        this.setState({
            showVideo: true
        })
    }
    closeMedia = () => {
        this.setState({
            showVideo: false
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleInput: this.handleInput,
                handleEnterKeyPressed: this.handleEnterKeyPressed,
                openMedia: this.openMedia,
                closeMedia: this.closeMedia,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
