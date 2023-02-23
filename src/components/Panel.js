import className from "classnames";

function Panel({children, ...rest}) {
    const style = className(
        'border rounded p-3 shadow bg-white w-full',
        rest.className,
    );
    
    return(
        <div {...rest} className={style}>
            {children}
        </div>
    );
}

export default Panel;