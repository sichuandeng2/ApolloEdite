import {useMutation } from '@apollo/client'
import {GQLInert} from './gql'
import {Formik} from 'formik'
import {Text, Input, Button} from 'viviui'

function InsertName(){

  const [addName] = useMutation(GQLInert);

  function submit(values,actions){
    console.log(values,actions)
    setTimeout(() => {
      console.log(values)
      addName({variables:{id:values.id,name:values.name,price:values.price}})
      actions.setSubmitting(false)
    }, 500);
  }
  return (
    <div>
      {/* <Formik initialValues={{id:'',name:"",price:''}} onSubmit ={(values,actions)=>submit(values,actions)}>  */}
      
          <form onSubmit={e=>{
            e.preventDefault();
            addName({variables:{name:input.value}})
          }}>
            <div>
              <Text>Id</Text>
              {/* <Input name='id' ref={node=>{input = node}}></Input> */}
            </div>
            <div>
              <Text>name</Text>
              <Input name='name'  ></Input>
            </div>
            <div>
              <Text>price</Text>
              <Input name='price'  ></Input>
            </div>
            <Button type='submit'>提交</Button>
          </form>
      
      {/* </Formik> */}
      {/* <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form> */}
    </div>
  );
}

export default InsertName