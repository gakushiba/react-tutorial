import React, { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './Validation';
import '../index.css';  // Tailwind CSSを適用するためにインポート

function InputForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  const inspectionNumber = useWatch({
    control,
    name: 'inspectionNumber',
    defaultValue: '',
  });

  const office = useWatch({
    control,
    name: 'office',
    defaultValue: '',
  });

  useEffect(() => {
    if (inspectionNumber.length >= 9 && office.length >= 3) { // 条件を設定
      handleSubmit(onSubmitForm)(); // フォームを自動送信
    }
  }, [inspectionNumber, office, handleSubmit, onSubmitForm]);

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
