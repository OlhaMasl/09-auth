'use client'

import { useState } from 'react';
import css from './EditProfilePage.module.css';
import { updateMe } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useAuthStore } from '@/lib/store/authStore';

const EditProfile = () => {
  const { user, setUser } = useAuthStore();
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSaveUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData = await updateMe({ username: userName })
    setUser(updatedData)
    router.push('/profile')
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image src={user?.avatar || 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'}
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
              value={userName}
            />
          </div>

          <p>{ user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button type="button" className={css.cancelButton} onClick={() => { router.back() }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditProfile;