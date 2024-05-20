// InputForm.js
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { formSchema } from './Validation';
// import './common.css';

// function InputForm({ onSubmit }) {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmitForm = (data) => {
//     onSubmit(data);
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit(onSubmitForm)} className="form">
//         <h2 className="form-title">検針票番号入力</h2>
//         <div className="form-group">
//           <label className="form-label">検針票番号 *</label>
//           <input
//             type="text"
//             {...register('inspectionNumber')}
//             className="form-input"
//           />
//           {errors.inspectionNumber && <p className="error-message">{errors.inspectionNumber.message}</p>}
//         </div>
//         <div className="form-group">
//           <label className="form-label">担当営業所 *</label>
//           <input
//             type="text"
//             {...register('office')}
//             className="form-input"
//           />
//           {errors.office && <p className="error-message">{errors.office.message}</p>}
//         </div>
//         <button type="submit" className="form-button">送信</button>
//       </form>
//     </div>
//   );
// }

// export default InputForm;

// 以下、tailwind css を使用
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './Validation';
import '../index.css';  // Tailwind CSSを適用するためにインポート

function InputForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] bg-[#fff4f4]">
      <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="mb-5 text-2xl text-center text-gray-800">検針票番号入力</h2>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-800">検針票番号 *</label>
          <input
            type="text"
            {...register('inspectionNumber')}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.inspectionNumber && <p className="mt-1 text-sm text-red-600">{errors.inspectionNumber.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold text-gray-800">担当営業所 *</label>
          <input
            type="text"
            {...register('office')}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.office && <p className="mt-1 text-sm text-red-600">{errors.office.message}</p>}
        </div>
        <button type="submit" className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-700">
          送信
        </button>
      </form>
    </div>
  );
}

export default InputForm;
