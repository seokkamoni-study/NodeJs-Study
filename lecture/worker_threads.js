// worker_threads
// 노드에서 멀티 스레드 방식으로 작업을 할수있음
// 하지만 노드에서 멀티스레드 방식을 쓰는 일은 극히 드물다

const { worker, isMainTread, parentPort } = require("worker_threads");

if (isMainTread) {
  // 메인스레드
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );

  for (let worker of threads) {
    worker.on("message", (value) => {
      // 워커에서 보내는거 받음
      console.log("워커로부터", value);
      worker.on("exit", () => {
        threads.delete(worker);
        if (threads.size === 0) {
          console.log("worker 끝");
        }
      });
    });
  }
} else {
  // 워커스레드
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
