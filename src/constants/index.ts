import { LuPhone } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';
import { FaRegClock, FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa6';

import nationalEmblem from '@/assets/national-emblem.png';
import nationalEmblemInverted from '@/assets/national-emblem-inverted.png';

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
  govName: import.meta.env.VITE_GOV_NAME,
  depName: import.meta.env.VITE_DEP_NAME,
  agencyName: import.meta.env.VITE_AGEN_NAME,
  projectName: import.meta.env.VITE_PROJECT_NAME,
};

// ---

export const images = {
  nationalEmblem,
  nationalEmblemInverted,
};
