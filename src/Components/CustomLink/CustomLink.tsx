import {Typography} from "@mui/material"
import Link from 'next/link'
import {ICustomLink} from "../../Types/Types"

const CustomLink = ({
    fontWeight = '300',
    text,
    href,
    handleClick,
    fontSize,
    color = 'black'
} : ICustomLink) => {

    return (
        <Link href={href}>
            <Typography
                onClick={handleClick && handleClick}
                sx={{
                cursor: 'pointer',
                color,
                fontSize,
                fontWeight
            }}>
                {text}
            </Typography>
        </Link>
    )
}

export default CustomLink