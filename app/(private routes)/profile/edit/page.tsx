'use client'

import { useState } from 'react';
import css from './EditProfilePage.module.css';
import { updateMe } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';

const EditProfile = () => {
    const [userName, setUserName] = useState('');
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      await updateMe({ username: userName })
      router.push('/profile')
  };

  return (
    <main className={css.mainContent}>
  <div className={css.profileCard}>
    <h1 className={css.formTitle}>Edit Profile</h1>

    <img src="avatar"
      alt="User Avatar"
      width={120}
      height={120}
      className={css.avatar}
    />

    <form className={css.profileInfo} onSubmit={handleSaveUser}>
      <div className={css.usernameWrapper}>
        <label htmlFor="username">Username:</label>
        <input id="username"
          type="text"
          className={css.input}
          onChange={handleChange}
        />
      </div>

      <p>Email: user_email@example.com</p>

      <div className={css.actions}>
        <button type="submit" className={css.saveButton}>
          Save
        </button>
                      <button type="button" className={css.cancelButton} onClick={() => { router.push('/profile') }}>
          Cancel
        </button>
      </div>
    </form>
  </div>
</main>
  );
};

export default EditProfile;