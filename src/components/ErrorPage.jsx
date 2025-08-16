function ErrorPage() {
    return (
        <div className="home flex flex-col items-center justify-center text-center min-h-[60vh] p-8">
            <div className="home__header">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                       OOPS...,  404 Error No Page Found
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                    This is an Error Page , where u mentioned wrong url or page not found
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;