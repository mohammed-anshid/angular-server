export interface User {
    mobileNumber: number;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    address: string;
    pincode: string;
    city: string;
    state: string;
    country: string;
    resume: string; // Assuming the file is uploaded as a File object
}