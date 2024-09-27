interface HeaderHomeProps {
    title: string;
    subTitle: string
}


export function HeaderHome ({title, subTitle}: HeaderHomeProps) {
    return (
      <div className="flex flex-col items-center justify-end relative h-[10rem]">
        <img src='/logoHeaderHome.png' alt='logo' className="w-36 h-34 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"/>
        <span className="text-2xl font-bold text-brown400 uppercase relative">{subTitle}</span>
        <h1 className="text-6xl text-gray500 font-light re relative tracking-[.8rem]">{title}</h1>
      </div>
    )
}