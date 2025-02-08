import { Control, FieldValues, Path } from 'react-hook-form';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import styles from './ChooseTheTime.module.scss';

interface ChooseTheTimeProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
}

const morningHours = [
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
];

const afternoonHours = [
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
];

const ChooseTheTime = <T extends FieldValues>({
  name,
  control,
}: ChooseTheTimeProps<T>) => {
  return (
    <div className={styles.datePicker}>
      <h2 className={styles.datePicker__heading}>Wybierz godzinę</h2>
      <Tabs defaultValue="account" className={styles.tabs}>
        <TabsList className={styles.tabs__list}>
          <TabsTrigger className={styles.tabs__trigger} value="account">
            Rano
          </TabsTrigger>
          <TabsTrigger className={styles.tabs__trigger} value="password">
            Południe
          </TabsTrigger>
        </TabsList>
        <TabsContent className={styles.tabs__content} value="account">
          {morningHours.map(hour => (
            <div key={hour} className={styles.datePicker__item}>
              {hour}
            </div>
          ))}
        </TabsContent>
        <TabsContent className={styles.tabs__content} value="password">
          {afternoonHours.map(hour => (
            <div key={hour} className={styles.datePicker__item}>
              {hour}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChooseTheTime;
