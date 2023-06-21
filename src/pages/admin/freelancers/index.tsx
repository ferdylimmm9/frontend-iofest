import AdminLayout from 'components/widgets/admin-layout';
import * as React from 'react';

export default function FreelancerIndexPage() {
  return <div />;
}

FreelancerIndexPage.getLayout = function getLayout(page: React.ReactNode) {
  return <AdminLayout>{page}</AdminLayout>;
};
