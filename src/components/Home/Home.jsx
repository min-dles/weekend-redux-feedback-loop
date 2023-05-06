function Home() {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Button was clicked');
    }

    return (
        <div>
            <h2>START SURVEY:</h2>
            <p>Complete the feedback survey by answering all questions.</p>
            <button onClick={handleClick}>CONTINUE</button>
        </div>
    );
}

export default Home;