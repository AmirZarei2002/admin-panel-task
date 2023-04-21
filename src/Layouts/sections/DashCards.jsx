export default function DashCards({
    title,
    icon: IconComponent,
    statistic,
    totalNumber,
    newsHead,
    classes,
    newsClasses
}) {
    return (
        <div
            className={`border z-0 rounded-xl rounded-tr-none my-4 w-full relative px-4 py-2 text-white opacity-80 shadow-sm bg-gradient-to-br space-y-2 ${classes}`}
        >
          <div className={`absolute right-0 px-2 py-1 mt-[-20px] rounded-tr-sm rounded-l-md z-10 ${newsClasses}`}>
            <h4>{newsHead}</h4>
          </div>
            <div className="flex flex-col items-center pt-5">
                <div className="text-2xl font-bold">
                  <img src={statistic} alt='statistic-images' />
                </div>
                <h2 className="text-md font-semibold pt-2">{title}</h2>
            </div>
            <div className="flex items-center">
                <div className="mr-[40%] lg:mr-[43%]">
                    {IconComponent && <IconComponent className="text-2xl" />}
                </div>
                <div className="flex justify-center">
                    <span className="font-semibold">{totalNumber}</span>
                </div>
            </div>
        </div>
    );
}
