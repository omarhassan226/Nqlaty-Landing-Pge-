import { styles } from "../../styles/styles"


const OrangeButton = ({children}) => {
    return (
        <div>
            <button style={styles.OrangeButton}>{children}</button>
        </div>
    )
}

export default OrangeButton
