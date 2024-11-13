declare namespace L {
    namespace Routing {
      function control(options: any): any;
      class Control {
        constructor(options?: any);
        getPlan(): any;
        setWaypoints(waypoints: any[]): void;
        spliceWaypoints(index: number, waypointsToRemove: number, ...waypoints: any[]): void;
        getWaypoints(): any[];
      }
    }
  }
  