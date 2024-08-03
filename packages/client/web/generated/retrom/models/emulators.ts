// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v5.27.1
// source: retrom/models/emulators.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "retrom";

export const RomType = { Custom: 0, SingleFile: 1, MultiFile: 2, UNRECOGNIZED: -1 } as const;

export type RomType = typeof RomType[keyof typeof RomType];

export namespace RomType {
  export type Custom = typeof RomType.Custom;
  export type SingleFile = typeof RomType.SingleFile;
  export type MultiFile = typeof RomType.MultiFile;
  export type UNRECOGNIZED = typeof RomType.UNRECOGNIZED;
}

export interface Emulator {
  id: number;
  supportedPlatforms: number[];
  name: string;
  romType: RomType;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface NewEmulator {
  supportedPlatforms: number[];
  name: string;
  romType: RomType;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface UpdatedEmulator {
  id: number;
  supportedPlatforms: number[];
  name?: string | undefined;
  romType?: RomType | undefined;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface EmulatorProfile {
  id: number;
  emulatorId: number;
  name: string;
  executablePath: string;
  supportedExtensions: string[];
  customArgs: string[];
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface NewEmulatorProfile {
  emulatorId: number;
  name: string;
  executablePath: string;
  supportedExtensions: string[];
  customArgs: string[];
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface UpdatedEmulatorProfile {
  id: number;
  emulatorId?: number | undefined;
  name?: string | undefined;
  executablePath?: string | undefined;
  supportedExtensions: string[];
  customArgs: string[];
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface DefaultEmulatorProfile {
  platformId: number;
  emulatorProfileId: number;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface NewDefaultEmulatorProfile {
  platformId: number;
  emulatorProfileId: number;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

export interface UpdatedDefaultEmulatorProfile {
  platformId: number;
  emulatorProfileId: number;
  createdAt?: Timestamp | undefined;
  updatedAt?: Timestamp | undefined;
}

function createBaseEmulator(): Emulator {
  return { id: 0, supportedPlatforms: [], name: "", romType: 0, createdAt: undefined, updatedAt: undefined };
}

export const Emulator = {
  encode(message: Emulator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.supportedPlatforms) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.romType !== 0) {
      writer.uint32(32).int32(message.romType);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Emulator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmulator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag === 16) {
            message.supportedPlatforms.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedPlatforms.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.romType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Emulator>): Emulator {
    return Emulator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Emulator>): Emulator {
    const message = createBaseEmulator();
    message.id = object.id ?? 0;
    message.supportedPlatforms = object.supportedPlatforms?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.romType = object.romType ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseNewEmulator(): NewEmulator {
  return { supportedPlatforms: [], name: "", romType: 0, createdAt: undefined, updatedAt: undefined };
}

export const NewEmulator = {
  encode(message: NewEmulator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.supportedPlatforms) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.romType !== 0) {
      writer.uint32(24).int32(message.romType);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(34).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewEmulator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewEmulator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.supportedPlatforms.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedPlatforms.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.romType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NewEmulator>): NewEmulator {
    return NewEmulator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NewEmulator>): NewEmulator {
    const message = createBaseNewEmulator();
    message.supportedPlatforms = object.supportedPlatforms?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.romType = object.romType ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseUpdatedEmulator(): UpdatedEmulator {
  return {
    id: 0,
    supportedPlatforms: [],
    name: undefined,
    romType: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const UpdatedEmulator = {
  encode(message: UpdatedEmulator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.supportedPlatforms) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.romType !== undefined) {
      writer.uint32(32).int32(message.romType);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedEmulator {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedEmulator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag === 16) {
            message.supportedPlatforms.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.supportedPlatforms.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.romType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdatedEmulator>): UpdatedEmulator {
    return UpdatedEmulator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatedEmulator>): UpdatedEmulator {
    const message = createBaseUpdatedEmulator();
    message.id = object.id ?? 0;
    message.supportedPlatforms = object.supportedPlatforms?.map((e) => e) || [];
    message.name = object.name ?? undefined;
    message.romType = object.romType ?? undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseEmulatorProfile(): EmulatorProfile {
  return {
    id: 0,
    emulatorId: 0,
    name: "",
    executablePath: "",
    supportedExtensions: [],
    customArgs: [],
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const EmulatorProfile = {
  encode(message: EmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.emulatorId !== 0) {
      writer.uint32(16).int32(message.emulatorId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.executablePath !== "") {
      writer.uint32(34).string(message.executablePath);
    }
    for (const v of message.supportedExtensions) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.customArgs) {
      writer.uint32(50).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emulatorId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.executablePath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.supportedExtensions.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customArgs.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<EmulatorProfile>): EmulatorProfile {
    return EmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EmulatorProfile>): EmulatorProfile {
    const message = createBaseEmulatorProfile();
    message.id = object.id ?? 0;
    message.emulatorId = object.emulatorId ?? 0;
    message.name = object.name ?? "";
    message.executablePath = object.executablePath ?? "";
    message.supportedExtensions = object.supportedExtensions?.map((e) => e) || [];
    message.customArgs = object.customArgs?.map((e) => e) || [];
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseNewEmulatorProfile(): NewEmulatorProfile {
  return {
    emulatorId: 0,
    name: "",
    executablePath: "",
    supportedExtensions: [],
    customArgs: [],
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const NewEmulatorProfile = {
  encode(message: NewEmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emulatorId !== 0) {
      writer.uint32(8).int32(message.emulatorId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.executablePath !== "") {
      writer.uint32(26).string(message.executablePath);
    }
    for (const v of message.supportedExtensions) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.customArgs) {
      writer.uint32(42).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewEmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.emulatorId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.executablePath = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.supportedExtensions.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.customArgs.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NewEmulatorProfile>): NewEmulatorProfile {
    return NewEmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NewEmulatorProfile>): NewEmulatorProfile {
    const message = createBaseNewEmulatorProfile();
    message.emulatorId = object.emulatorId ?? 0;
    message.name = object.name ?? "";
    message.executablePath = object.executablePath ?? "";
    message.supportedExtensions = object.supportedExtensions?.map((e) => e) || [];
    message.customArgs = object.customArgs?.map((e) => e) || [];
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseUpdatedEmulatorProfile(): UpdatedEmulatorProfile {
  return {
    id: 0,
    emulatorId: undefined,
    name: undefined,
    executablePath: undefined,
    supportedExtensions: [],
    customArgs: [],
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const UpdatedEmulatorProfile = {
  encode(message: UpdatedEmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.emulatorId !== undefined) {
      writer.uint32(16).int32(message.emulatorId);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.executablePath !== undefined) {
      writer.uint32(34).string(message.executablePath);
    }
    for (const v of message.supportedExtensions) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.customArgs) {
      writer.uint32(50).string(v!);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedEmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emulatorId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.executablePath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.supportedExtensions.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customArgs.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdatedEmulatorProfile>): UpdatedEmulatorProfile {
    return UpdatedEmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatedEmulatorProfile>): UpdatedEmulatorProfile {
    const message = createBaseUpdatedEmulatorProfile();
    message.id = object.id ?? 0;
    message.emulatorId = object.emulatorId ?? undefined;
    message.name = object.name ?? undefined;
    message.executablePath = object.executablePath ?? undefined;
    message.supportedExtensions = object.supportedExtensions?.map((e) => e) || [];
    message.customArgs = object.customArgs?.map((e) => e) || [];
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseDefaultEmulatorProfile(): DefaultEmulatorProfile {
  return { platformId: 0, emulatorProfileId: 0, createdAt: undefined, updatedAt: undefined };
}

export const DefaultEmulatorProfile = {
  encode(message: DefaultEmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platformId !== 0) {
      writer.uint32(8).int32(message.platformId);
    }
    if (message.emulatorProfileId !== 0) {
      writer.uint32(16).int32(message.emulatorProfileId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DefaultEmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDefaultEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emulatorProfileId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<DefaultEmulatorProfile>): DefaultEmulatorProfile {
    return DefaultEmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DefaultEmulatorProfile>): DefaultEmulatorProfile {
    const message = createBaseDefaultEmulatorProfile();
    message.platformId = object.platformId ?? 0;
    message.emulatorProfileId = object.emulatorProfileId ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseNewDefaultEmulatorProfile(): NewDefaultEmulatorProfile {
  return { platformId: 0, emulatorProfileId: 0, createdAt: undefined, updatedAt: undefined };
}

export const NewDefaultEmulatorProfile = {
  encode(message: NewDefaultEmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platformId !== 0) {
      writer.uint32(8).int32(message.platformId);
    }
    if (message.emulatorProfileId !== 0) {
      writer.uint32(16).int32(message.emulatorProfileId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewDefaultEmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewDefaultEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emulatorProfileId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NewDefaultEmulatorProfile>): NewDefaultEmulatorProfile {
    return NewDefaultEmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NewDefaultEmulatorProfile>): NewDefaultEmulatorProfile {
    const message = createBaseNewDefaultEmulatorProfile();
    message.platformId = object.platformId ?? 0;
    message.emulatorProfileId = object.emulatorProfileId ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

function createBaseUpdatedDefaultEmulatorProfile(): UpdatedDefaultEmulatorProfile {
  return { platformId: 0, emulatorProfileId: 0, createdAt: undefined, updatedAt: undefined };
}

export const UpdatedDefaultEmulatorProfile = {
  encode(message: UpdatedDefaultEmulatorProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platformId !== 0) {
      writer.uint32(8).int32(message.platformId);
    }
    if (message.emulatorProfileId !== 0) {
      writer.uint32(16).int32(message.emulatorProfileId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(message.createdAt, writer.uint32(26).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(message.updatedAt, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatedDefaultEmulatorProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatedDefaultEmulatorProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.platformId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.emulatorProfileId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = Timestamp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.updatedAt = Timestamp.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<UpdatedDefaultEmulatorProfile>): UpdatedDefaultEmulatorProfile {
    return UpdatedDefaultEmulatorProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatedDefaultEmulatorProfile>): UpdatedDefaultEmulatorProfile {
    const message = createBaseUpdatedDefaultEmulatorProfile();
    message.platformId = object.platformId ?? 0;
    message.emulatorProfileId = object.emulatorProfileId ?? 0;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Timestamp.fromPartial(object.createdAt)
      : undefined;
    message.updatedAt = (object.updatedAt !== undefined && object.updatedAt !== null)
      ? Timestamp.fromPartial(object.updatedAt)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
