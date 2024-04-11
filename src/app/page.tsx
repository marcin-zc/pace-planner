import Link from "next/link";

function Home() {
    return (
        <main>
            <div>This is an application that will help you calculate your pace in running various distances to achieve
                your set goal.
            </div>
            <div>
                <Link href={'/marathon'}>Marathon calculator</Link>
            </div>
        </main>
    );
}

export default Home