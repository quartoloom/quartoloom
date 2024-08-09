"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@phosphor-icons/react";
import { format } from "date-fns";
import { sendBookADemo } from "@/app/actions";

type Props = { button?: ReactNode };

export const BookAMeeting = ({ button }: Props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    schoolName: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (
        !data.name ||
        !data.lastName ||
        !data.email ||
        !data.phone ||
        !data.role ||
        !data.schoolName ||
        !data.date
      ) {
        setLoading(false);
        toast.error("Please enter data in all fields");
        return false;
      }

      await sendBookADemo({
        ...data,
        date: format(data.date, "dd/MM/yyyy hh:mm a"),
      });
      setLoading(false);
      toast.success(
        `Thank you for your interest ${data.name}! We will get back to you soon!`
      );
      setOpen(false);
      setData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        schoolName: "",
        date: "",
      });
      return true;
    } catch (error) {
      setLoading(false);
      toast.error("Ooops! unfortunately some error has occurred.");
    }
  };
  return (
    <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
      <DialogTrigger asChild>
        {button ? (
          button
        ) : (
          <Button className='rounded-full' aria-label='Book a demo button'>
            <CalendarIcon className='mr-2 size-4' />
            Book a Demo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className='max-w-[90%] sm:max-w-[600px] md:max-w-[800px] h-[80vh] md:h-auto'>
        <DialogHeader>
          <DialogTitle>
            Empower your school today - Book a demo now!
          </DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5 overflow-y-auto'>
          <div className=' flex flex-col'>
            <label
              htmlFor='#name'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              First Name
              <span className='text-red-600'>*</span>
            </label>
            <input
              value={data["name"]}
              name='name'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='name'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='Name'
              type='text'
            />
          </div>
          <div className=' flex flex-col'>
            <label
              htmlFor='#lastname'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              Last Name
              <span className='text-red-600'>*</span>
            </label>
            <input
              value={data["lastName"]}
              name='lastName'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='lastname'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='Last Name'
            />
          </div>

          <div className=' flex flex-col'>
            <label
              htmlFor='#email'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              Email
              <span className='text-red-600'> *</span>
            </label>
            <input
              value={data["email"]}
              name='email'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='email'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='Email'
              type='email'
            />
          </div>
          <div className=' flex flex-col'>
            <label
              htmlFor='#phone'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              Phone Number
              <span className='text-red-600'>*</span>
            </label>
            <input
              value={data["phone"]}
              name='phone'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='phone'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='phone'
            />
          </div>
          <div className=' flex flex-col'>
            <label
              htmlFor='#schoolName'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              School Name
              <span className='text-red-600'> *</span>
            </label>
            <input
              value={data["schoolName"]}
              name='schoolName'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='schoolName'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='School Name'
            />
          </div>
          <div className=' flex flex-col'>
            <label
              htmlFor='#role'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              Your role in the School
              <span className='text-red-600'>*</span>
            </label>
            <input
              value={data["role"]}
              name='role'
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              id='role'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='Your role in the School'
            />
          </div>
          <div className=' flex flex-col'>
            <label
              htmlFor='#date'
              className='text-slate-600 font-medium text-sm mb-1 pl-1'
            >
              Pick demo date
              <span className='text-red-600'>*</span>
            </label>

            <input
              value={data["date"]}
              min={format(Date.now(), "yyyy-MM-dd hh:mm")}
              onChange={(e) =>
                setData((prev: any) => ({
                  ...prev,
                  ["date"]: e.target.value,
                }))
              }
              type='datetime-local'
              name='date'
              id='date'
              className='outline-none border bg-transparent border-gray-300 rounded-lg text-gray-500 focus:bg-background focus:border-primary py-2 px-3 text-sm '
              placeholder='Pick demo date'
            />
          </div>
        </div>
        <DialogFooter className='gap-5 sm:gap-0'>
          <DialogClose>
            <Button className='w-full' variant={"outline"}>
              Close
            </Button>
          </DialogClose>
          <Button disabled={loading} onClick={(e) => handleSubmit(e)}>
            {loading && (
              <Spinner
                className='mr-2 h-4 w-4 animate-spin text-inherit'
                fontSize={18}
              />
            )}
            Send Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
