import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import VisionMissionView from '../views/VisionMissionView.vue';
import CoreValuesServiceView from '../views/CoreValuesServiceView.vue';
import ServicePromiseView from '../views/ServicePromiseView.vue';
import LogoPhilosophyView from '../views/LogoPhilosophyView.vue';
import OutpatientCareView from '../views/OutpatientCareView.vue';
import InpatientCareView from '../views/InpatientCareView.vue';
import EmergencyRoomView from '../views/EmergencyRoomView.vue';
import LaboratoryView from '../views/LaboratoryView.vue';
import RadiologyView from '../views/RadiologyView.vue';
import PharmacyView from '../views/PharmacyView.vue';
import RightsObligationsView from '../views/RightsObligationsView.vue';
import DoctorScheduleView from '../views/DoctorScheduleView.vue';
import OutpatientQueueView from '../views/OutpatientQueueView.vue';
import InpatientBedAvailabilityView from '../views/InpatientBedAvailabilityView.vue';
import FAQView from '../views/FAQView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/vision-and-mission', name: 'vision-and-mission', component: VisionMissionView },
    { path: '/core-values-of-service', name: 'core-values-of-service', component: CoreValuesServiceView },
    { path: '/service-promise', name: 'service-promise', component: ServicePromiseView },
    { path: '/logo-philosophy', name: 'logo-philosophy', component: LogoPhilosophyView },
    { path: '/outpatient-care', name: 'outpatient-care', component: OutpatientCareView },
    { path: '/inpatient-care', name: 'inpatient-care', component: InpatientCareView },
    { path: '/emergency-room', name: 'emergency-room', component: EmergencyRoomView },
    { path: '/laboratory', name: 'laboratory', component: LaboratoryView },
    { path: '/radiology', name: 'radiology', component: RadiologyView },
    { path: '/pharmacy', name: 'pharmacy', component: PharmacyView },
    { path: '/rights-and-obligations', name: 'rights-and-obligations', component: RightsObligationsView },
    { path: '/doctor-schedule', name: 'doctor-schedule', component: DoctorScheduleView },
    { path: '/outpatient-queue', name: 'outpatient-queue', component: OutpatientQueueView },
    { path: '/inpatient-bed-availability', name: 'inpatient-bed-availability', component: InpatientBedAvailabilityView },
    { path: '/faq', name: 'faq', component: FAQView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // kalau pakai tombol "back/forward", pakai posisi sebelumnya
    if (savedPosition) {
      return savedPosition;
    } else {
      // kalau klik link biasa, selalu ke atas
      return { top: 0 };
    }
  },
});

export default router;