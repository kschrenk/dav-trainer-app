/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api": {
    get: operations["getData"];
  };
  "/api/file": {
    get: operations["findAll"];
  };
  "/api/file/upload": {
    post: operations["upload"];
  };
  "/api/file/{id}/process": {
    post: operations["process"];
  };
  "/api/file/{id}": {
    delete: operations["remove"];
  };
  "/api/course": {
    get: operations["findAll"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    File: {
      id: number;
      fieldname: string;
      originalname: string;
      encoding: string;
      mimetype: string;
      destination: string;
      filename: string;
      path: string;
      size: number;
    };
    Course: {
      /** @example MUC-24-0170 */
      bookingCode: string;
      /** Format: date-time */
      startDate: string;
      /** @example 19.01.24 */
      dates: string;
      /** @example Do 14:45-17:45 */
      time?: string;
      /** @example 10-13 */
      age: string;
      /** @example Schnupperkletterkurs indoor */
      title: string;
      /** @example Kurs */
      type: string;
      /** @example 	Sportklettern in k.A.Schnupperklettern */
      level: string;
      /**
       * @description A climbing gym or a mountain hut
       * @example Dortmunder Hütte
       */
      quarters?: string;
      /** @example München */
      location: string;
      /** @example Bus und Bahn */
      travelDescription?: string;
      /** @example sportklettern */
      category: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  getData: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  findAll: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Course"][];
        };
      };
    };
  };
  upload: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  process: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
}