type Customer = {
    id: string,
    name: string,
    age: number,
    address: string,
    createdAt: Date,
}

let customers: Customer[] = [];


export const getCustomers = () => customers;

export const addCustomer = (customer: Customer) => customers.push(customer);

export const deleteCustomer = (id: string) => customers = customers.filter((customer) => customer.id !== id)

export const updateCustomer = (id: string, name: string, age:number, address: string) => {
    const customer = customers.find((customer) => customer.id === id);

    if (customer) {
        customer.name = name;
        customer.age = age;
        customer.address = address;
    } else {
        throw new Error("Customer not found");
    }
}

export const getCustomerById = (id: string) => customers.find((customer) => customer.id === id)

