import store from "@/stores";

const can = (permission) => {
  return hasPermission(
    store.getters['user/permissionList'],
    permission
  );
};

const cannot = (permission) => {
  return !hasPermission(
    store.getters['user/permissionList'],
    permission
  );
};

const hasPermission = (userPermissions, permissionName) => {
  permissionName = permissionName.toLowerCase();

  // make sure its an actual permission
  // this replicated the Gate part of the Core side
  let allPermissions = store.getters['permissions/allNodes'];
  if (!Array.isArray(allPermissions)) {
    return false;
  }
  
  if (!allPermissions.includes(permissionName)) {
    return false;
  }

  // check the permission or its alt versions for a match
  if (userPermissions && userPermissions.length > 0) {
    let altPermissions = generateAltPermissions(permissionName);
    return userPermissions.find(
      permissionName => altPermissions.includes(permissionName)
    ) !== undefined;
  }

  return false;
};

const generateAltPermissions = (permissionName) => {
  let altPermissions = ['*', permissionName];
  let permParts = permissionName.split('.');

  if (permParts && permParts.length > 0) {
    let currentPermission = '';
    for (let i = 0; i < (permParts.length -1); i++) {
      currentPermission += permParts[i] + '.';
      altPermissions.push(currentPermission + '*');
    }
  }

  return altPermissions;
};

export {
  can,
  cannot,
  hasPermission
};
