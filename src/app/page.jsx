import { PrismaDB } from '@/libs/prisma';
import { TaskCard } from './components/TaskCard';

async function loadTask() {
  return await PrismaDB.task.findMany();
}

export default async function Home() {
  const tasks = await loadTask();

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>
        {
          tasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              description={task.description}
              title={task.title}
              createdAt={task.createdAt}
            />
          ))
        }
      </div>
    </section>
  )
}
