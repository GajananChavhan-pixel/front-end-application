
export const FirstName=
{
required:{value:true, message:"FirstName is must ...!"},
minLength:{value:15, message:"FirstName is short ...!"},
maxLength:{value:25, message:"FirstName is long ...!"}
}

export const LastName=
{
    required:{value:true, message:"LastName is must ...!"},
    minLength:{value:15, message:"LastName is short ...!"},
    maxLength:{value:25, message:"LastName is long ...!"}
}

export const Age=
{
    required:{value:true, message:"Age number is must ...!"},
    minLength:{value:10, message:"Age number is Ok...!"},
    maxLength:{value:15, message:"Age number is invalid ...!"}
}

export const Email=
{
    required:{value:true, message:"Email number is must ...!"},
    minLength:{value:10, message:"Email number is Ok...!"},
    maxLength:{value:15, message:"Email number is invalid ...!"}   
}

export const Mobileno=
{
    required:{value:true, message:"Mobileno number is must ...!"},
    minLength:{value:10, message:"Mobileno number is Ok...!"},
    maxLength:{value:15, message:"Mobileno number is invalid ...!"}   
}

export const PanCard=
{
    required:{value:true, message:"PanCard number is must ...!"},
    minLength:{value:10, message:"PanCard number is Ok...!"},
    maxLength:{value:15, message:"PanCard number is invalid ...!"}   
}

export const CibilScore=
{
    required:{value:true, message:"CibilScore number is must ...!"},
    minLength:{value:3, message:"CibilScore number is Ok...!"},
    maxLength:{value:5, message:"CibilScore number is invalid ...!"}   
}