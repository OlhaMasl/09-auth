import css from './ProfilePage.module.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "NoteHub is a simple and efficient application designed for managing personal notes",
  openGraph: {
      title: "NoteHub",
      description: "NoteHub is a simple and efficient application designed for managing personal notes",
      url: "https://08-zustand-sandy-six.vercel.app",
      siteName: 'NoteHub',
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub picture",
        },
      ],
    },
};

const Profile = () => {
  return (
    <main className={css.mainContent}>
  <div className={css.profileCard}>
      <div className={css.header}>
	     <h1 className={css.formTitle}>Profile Page</h1>
	     <a src="" className={css.editProfileButton}>
	       Edit Profile
	     </a>
	   </div>
     <div className={css.avatarWrapper}>
      <img
        src="Avatar"
        alt="User Avatar"
        width={120}
        height={120}
        className={css.avatar}
      />
    </div>
    <div className={css.profileInfo}>
      <p>
        Username: your_username
      </p>
      <p>
        Email: your_email@example.com
      </p>
    </div>
  </div>
</main>

  )
}

export default Profile;