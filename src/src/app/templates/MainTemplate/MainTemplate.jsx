import Header from '../../components/Header'

export default function MainTemplate({ children }) {
    return (
        <>
            <Header />
            <main className="container p-5">
                {children}
            </main>
        </>
    )
}