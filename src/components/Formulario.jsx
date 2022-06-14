import { useForm } from "react-hook-form";
import { edadValidator } from "./validator";


const Formulario =()=>{



    const { register,formState:{errors},watch, handleSubmit } = useForm({
        // Creando valores por defectos para colocarlos en la hoja
        //defaultValues:{
          //  nombre: 'luis'
        //}
    });
    

    const onSubmit = (data) =>{
        console.log(data);
    }

    const incluirTelefono = watch('inluirTelefono');

    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre: </label>
                <input type="text" {...register('nombre',{
                    required: true,
                    maxLength: 20
                })}/>
                {errors.nombre?.type == 'required' && <p>El campo es requerido</p>}
                {errors.nombre?.type == 'maxLength' && <p>El campo solo permite hasta 20 caracteres</p>}
            </div>
            <br></br>
            <div>
                <label>Apellido</label>
                <input type="text" {...register('Apellido', {
                    required: true,
                    maxLength: 20
                })}/>
                
            </div>
            <br></br>
            <div>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })}/>
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
                
            </div>
            <br></br>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}/>
                {errors.email?.type == 'pattern' && <p>El formato del email es incorrecto</p>}
            
            </div>
            <br></br>
            <div>

                <label>¿Inluir Teléfono?</label>
                <input type="checkbox" {...register('inluirTelefono')}/>
            </div>
            <br></br>
            {incluirTelefono && (
                <div>
                <label>Telefono</label>
                <input type="text" {...register('telefono')}/>
            
            </div>
            )}
            <input type="submit" value="Enviar" />
            
        </form>
    </div>
}

export default Formulario;