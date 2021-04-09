function MenuItems({children}) {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    )
}

export default MenuItems
