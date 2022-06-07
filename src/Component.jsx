import Header from "./Components/Header"

function Content() {
    return (
        <div>
            <h1>This Is A Content</h1>
            <button>Click Me</button>
            
        </div>
    )
}

function Component() {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}

export default Component