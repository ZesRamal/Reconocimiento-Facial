import style from "./register.module.css"
import Form from "../../components/Form/Form"

const index = () => {


    return (
        <div className={style.register}>
            <center className={style.title}>Registrar Criminal</center>
            <Form />
        </div>
    )
}

export default index