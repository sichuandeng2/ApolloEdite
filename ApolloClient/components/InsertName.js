import {useMutation } from '@apollo/client'
import {GQLInert} from './gql'
import {Formik,Form} from 'formik'
import {Text, Input, Button,Field} from 'viviui'

function InsertName(){
  let inputId
  let inputName
  let inputPrice
  const [addName] = useMutation(GQLInert);

  function submit(values,actions){
 
    setTimeout(() => {
      // let v= JSON.stringify(values)
      let v= values
      console.log(v)

      addName({variables:{id:values.id,name:values.name,price:values.price}})
      actions.setSubmitting(false)
    }, 500);
  }
  return (
    <div>
      <Formik initialValues={{id:'',name:"",price:''}} 
      onSubmit ={(values,actions)=>submit(values,actions)}> 
        {
          props => (
            <Form>
              <Text>id</Text>
              <Input as="input" name ="id" onChange={props.handleChange} value={props.values.id} onBlur={props.handleBlur}></Input>
              <Text>name</Text>
              <Input as="input" name = "name"  onChange={props.handleChange} value={props.values.name}></Input>
              <Text>price</Text>
              <Input as="input" name = "price"  onChange={props.handleChange} value={props.values.price}></Input>
              <Button type="submit">添加</Button>
            </Form>
          )
        }
      
      </Formik>

      
      {/* <form onSubmit={e=>{
            e.preventDefault();
            let getId = inputId.value
            let getName = inputName.value
            let getprice = inputPrice.value
            console.log(getId,getName,getprice)
            addName({paras:{id:getId,name:getName,price:getprice}})
          }}>
            <div>
              <Text>Id</Text>
              <Input name='id' ref={node=>{inputId = node}}></Input>
            </div>
            <div>
              <Text>name</Text>
              <Input name='name'  ref={node=>{inputName = node}}></Input>
            </div>
            <div>
              <Text>price</Text>
              <Input name='price' ref={node=>{inputPrice = node}}  ></Input>
            </div>
            <Button type='submit'>提交</Button>
          </form> */}


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