import { deleteCustomer, getCustomerById, updateCustomer } from "@/lib/customers";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try {
        const id = req.url.split("customers/")[1];
        console.log(id)
        const customer = getCustomerById(id);

        if (!customer) {
            return NextResponse.json({
                message: "NOT FOUND", error: "Customer not found"
            }, {
                status: 404,
            })
        } 
      
        return NextResponse.json({
            message: "OK", customer
        }, {
            status: 200,
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "ERROR", error
        }, {
            status: 500,
        })
    }
}

export const PUT = async (req: Request, res: Response) => {
    try {
        const { name, age, address } = await req.json();
        const id = req.url.split("customers/")[1];
        updateCustomer(id, name, age, address);
        return NextResponse.json({ message: "OK" }, {
            status: 200,
        })
    } catch (error) {
        NextResponse.json({ message: "ERROR", error }, {
            status: 500,
        })
    }
}

export const DELETE = async (req: Request, res: Response) => {
    try {
        const id = req.url.split("customers/")[1];
        deleteCustomer(id);
        return NextResponse.json({ message: "OK" }, {
            status: 200,
        })

    } catch (error) {
        NextResponse.json({ message: "EROR", error }, {
            status: 500,
        })
    }
}

