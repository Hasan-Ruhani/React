
const Header = () => {
    const city = ['Dhaka', 'Khulna', 'London', 'New York', 'Rajshahi']

    return(
        <>
            <ol>
                {
                    city.map((items, i)=> {
                        return <li key={i.toString()}>{items}</li>
                    })
                }
            </ol>
        </>
    );
}

export default Header