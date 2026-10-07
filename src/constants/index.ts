import { LuPhone } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';
import { FaRegClock, FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';

import nationalEmblem from '@/assets/national-emblem.png';

export const webIcons = {
  phone: LuPhone,
  email: MdMailOutline,
  clock: FaRegClock,
  user: FaUser,
  lock: FaLock,
};

// ----

export const titles = {
  appTitle: import.meta.env.VITE_APP_NAME,
};

// ---

export const images = {
  nationalEmblem,
};
