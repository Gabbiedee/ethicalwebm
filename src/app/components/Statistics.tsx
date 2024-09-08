const Statistics = () => {
    const stats = [
        {
            figure: "800+",
            text: "Partners across African countries"
        },
        {
            figure: "93%",
            text: "Satisfaction rate from our customers."
        },
        {
            figure: "4.9",
            text: "Average customer ratings out of 5.00!"
        }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center my-5 space-y-5 sm:space-y-0">
            {stats.map((stat, index) => (
                <div 
                    className="flex flex-col items-center text-center m-3 w-full sm:w-1/3 md:w-1/4 lg:w-1/6" 
                    key={index}
                >
                    <p className="font-semibold text-3xl sm:text-4xl px-3">{stat.figure}</p>
                    <p className="text-sm sm:text-xs text-black opacity-50">{stat.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Statistics;
