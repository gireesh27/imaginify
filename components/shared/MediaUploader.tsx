// import React from 'react'
"use client";
import { dataUrl,getImageSize } from '@/lib/utils';
import { useToast } from '../ui/use-toast'
import {CldImage, CldUploadWidget} from "next-cloudinary"
import Image from "next/image";
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { buffer } from 'stream/consumers';
type MediaUploaderProps = {
    onValueChange:(value:string)=>void;
    setImage:React.Dispatch<any>;
    publicId:string;
    image:any;
    type:string;
}
const MediaUploader = ({onValueChange,setImage,image,publicId,type}:MediaUploaderProps) => {
    const {toast}=useToast();

    const onUploadSuccessHandler=(result:any)=>{
        setImage((prevState:any)=>({
            ...prevState,
            publicId: result?.info?.public_id,
            width:result?.info?.width,
            height:result?.info?.height,
            secureUrl:result?.info?.secureUrl,
        }))
        onValueChange(result?.info?.public_id)

       toast({
        title:"Image uploaded successfully",
        description:"1 Credit was deducted from your Account",
        duration:5000,
        className:"success-toast"
       })
    }
    const onUploadErrorHandler=()=>{
        toast({
            title:"Something Went Wrong while uploading",
            description:"Please try again",
            duration:5000,
            className:"error-toast"
           })
    }

  return (
    <CldUploadWidget 
    uploadPreset='GK_IMAGINIFY'
    options={{
        multiple:false,
        resourceType:"image",
    }}
    onSuccess={onUploadSuccessHandler}
    onError={onUploadErrorHandler}
    >
    {({open})=>(
        <div className='flex flex-full gap-4'>
            <h3 className='h3-bold text-dark-600'>
                Original
            </h3>
            {publicId ?(
                <>
                <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                    <CldImage
                      width={getImageSize(type,image,"width")}
                      height={getImageSize(type, image, "height")}
                      src={publicId}
                      alt="image"
                      sizes={"(max-width:767px) 100vw,50vw"}
                      placeholder={dataUrl as PlaceholderValue}
                      className='media-uploader_cldImage'
                    />

                </div>
                </>
            ):(
              <div className='media-uploader_cta' onClick={()=>open()}>
                    <div className='media-uploader_cta-image'>
                        <Image 
                        src="/assets/icons/add.svg"
                        alt="Add Image"
                        width={24}
                        height={24}/>
                    </div>
                    <p className='p-14-medium'>Click Here to upload Image</p>
              </div>
            )}
        </div>
    )}
    </CldUploadWidget>
  )
}

export default MediaUploader