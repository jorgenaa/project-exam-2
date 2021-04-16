
const Sidebar = (props) => {
    const sidebarClass = `${props.type}`;
    return (
        <aside className={sidebarClass}>
            {props.children}
        </aside>
    )
}

export default Sidebar;