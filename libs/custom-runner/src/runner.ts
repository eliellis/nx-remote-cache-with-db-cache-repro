import { defaultTasksRunner, DefaultTasksRunnerOptions } from '@nx/devkit';
import { TasksRunner } from 'nx/src/tasks-runner/tasks-runner';
import { DummyRemoteCache } from './remote-cache';

const customRunner: TasksRunner<DefaultTasksRunnerOptions> = (
  tasks,
  options,
  ctx
) => {
  const remoteCache = new DummyRemoteCache();
  return defaultTasksRunner(
    tasks,
    {
      ...options,
      remoteCache,
    },
    ctx
  );
};

export default customRunner;
